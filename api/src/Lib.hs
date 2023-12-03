module Lib (main) where

import Network.Wai.Handler.Warp
import Network.Wai.Middleware.Cors
import Network.Wai.Middleware.RequestLogger
import Network.Wai.Middleware.Static hiding (Options, defaultOptions, staticPolicy)
import Network.Wai.Middleware.Static qualified as Static
import Relude
import Relude.Unsafe as Unsafe
import Web.Scotty

ops :: Port -> Options
ops port = defaultOptions
  { settings = defaultSettings 
      & setFdCacheDuration 60
      & setPort port
  , verbose = 1
  }

main :: IO ()
main = do
  (Unsafe.read -> port) <- lookupEnv "PORT" <&> (?: "3000")
  
  cache <- initCaching PublicStaticCaching

  scottyOpts (ops port) $ do
    middleware $ cors $ const $ Just corsPolicy
    middleware $ staticPolicyWithOptions (staticOps cache) staticPolicy
    middleware logStdoutDev
  where
    staticOps container = Static.defaultOptions
      { cacheContainer = container
      }

    staticPolicy = addBase "static"

    corsPolicy = simpleCorsResourcePolicy 
      { corsMethods = ["GET"]
      , corsMaxAge = Just $ 30 * 60
      }
