#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.001, 0.061, 0.190);
vec3 colorB = vec3(0.236, 0.454, 1.000);

float f(float x) {
    return clamp(pow(abs(sin(x)), 10.0) * 50.0 - 7.5, 0.0, 1.0);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    st -= .5;
    st.x *= u_resolution.x/u_resolution.y;

    mat2 zoom = mat2(
        +cos(u_time), -sin(0.0),
        +sin(0.0), +cos(u_time)
    );

    float r = 90.0 * pow(sin(u_time * .8), 8.0) * .05;
    mat2 rotation = mat2(
        +cos(r), -sin(r),
        +sin(r), +cos(r)
    );

    st *= zoom;
    st *= rotation;

    float x = pow(abs(st.x - st.y), .2);

    float t = abs(st.y * st.x) * 8.5 - u_time;
    float t2 = u_time - abs(5.0 * st.y * st.x) * 4.5;

    float pct = .5 * exp(f(t + x)) * f(t)
        	  + .5 * exp(f(t + x + 1.6)) * f(t + 1.6);

    float pct2 = .25 * exp(f(t2 + x)) * f(t2)
        	   + .25 * exp(f(t2 + x + 1.6)) * f(t2 + 1.6);

    pct2 = exp(pct2) / 2.0 * exp(pct);

    float stage = mod(u_time * 0.75, 3.0);
    st = max(vec2(0.2), st + .4);

    vec3 accentColor =
        (stage <= 1.0)
            ? colorB * (1.5 - 1.5 * x) * 1.25 :
        (stage <= 2.0)
            ? vec3(st, 0.0)
            : vec3(st, 1.0) ;

    vec3 bgColor = mix(colorA, accentColor, pct2);
    vec3 color = mix(bgColor, accentColor, pct);

    color += smoothstep(0.5, 0.11, x) * accentColor * 2.5
           - smoothstep(0.1, 0.01, x) * color;

    gl_FragColor = vec4(color, 0.95);
}
