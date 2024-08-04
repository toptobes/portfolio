#!/usr/bin/bash -e

# args:
#  - [tag]: Docker tag
#  - [apikey]: Api key secret allowed for me to make post requests to the server
#  - [gcargs]: Additional gcloud arguments for `gcloud run deploy`

for argument in "$@"; do
   key=$(echo "$argument" | cut -f1 -d=)
   value="${argument:${#key}+1}"
   declare "$key"="$value"
done

tag="${tag:-us-central1-docker.pkg.dev/kpg-portfolio/portfolio-repo/portfolio-api}"
gcargs="${gcargs:-}"

cd api

make image TAG="$tag"
docker push "$tag"

add_var() 
{
  if [ -n "${!2}" ]; then 
    update_vars+="$1=${!2},"
  fi
}

update_vars=""

add_var API_KEY apikey

update_vars="${update_vars%,}"
if [ -n "$update_vars" ]; then
  update_vars="--update-env-update_vars=[$update_vars]"
fi

# Not sure why, but it gcloud doesn't like it when I run the command directly...
eval "gcloud run deploy portfolio-api --image $tag --region us-central1 --platform managed $update_vars $gcargs"

if [[ -n "$revprune" && "${revprune,,}" == true ]]; then
  gcloud run revisions list --filter="status.conditions.type:Active AND status.conditions.status:'False'" --format='value(metadata.name)' --region us-central1 | xargs -r -L1 gcloud run revisions delete --region us-central1 --quiet
fi
