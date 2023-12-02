type AttributeArray = Float32Array | Float64Array | Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array;

type GLKey = keyof WebGLRenderingContext;

type WebGLNumKey<DrawMode extends keyof WebGLRenderingContext> = WebGLRenderingContext[DrawMode] extends number
  ? DrawMode
  : never

interface AttributeInfo {
  data: AttributeArray;
  type: GLKey;
  size: number;
}

interface UniformInfo {
  type: string;
  values: any[];
}

export interface ShaderConfig<DrawMode extends GLKey> {
  fragmentSources: string[];
  vertexSources: string[];
  viewport?: [number, number, number, number];
  attributes?: Record<string, AttributeInfo>;
  uniforms?: Record<string, UniformInfo>;
  drawMode: WebGLNumKey<DrawMode>;
}

export type ShaderTools = ReturnType<typeof shaders>;

export function shaders<DrawMode extends keyof WebGLRenderingContext>($canvas: HTMLCanvasElement, config: ShaderConfig<DrawMode>) {
  const {
    vertexSources,
    fragmentSources,
    viewport = [0, 0, $canvas.width, $canvas.height],
    attributes = {},
    uniforms = {},
    drawMode,
  } = config;

  let gl = $canvas.getContext('webgl') || $canvas.getContext('experimental-webgl') as WebGLRenderingContext;

  const fragmentShaders = fragmentSources.map(source => makeShader(gl, gl.FRAGMENT_SHADER, source));
  const vertexShaders = vertexSources.map(source => makeShader(gl, gl.VERTEX_SHADER, source));

  const program = gl.createProgram()!;

  fragmentShaders.concat(vertexShaders).forEach(shader => {
    gl.attachShader(program, shader);
  });

  gl.linkProgram(program);
  gl.useProgram(program);

 const buffers = Object.entries(attributes).map(([name, { data, type, size }]) => {
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

    const location = gl.getAttribLocation(program, name);
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(location, size, gl[type] as number, false, 0, 0);

    return buffer;
  });

  gl.viewport(...viewport);

  _updateUniforms(uniforms);

  function updateUniforms(_uniforms: Record<string, any[]>) {
    const transformedUniforms: Record<string, UniformInfo> = {};

    for (const [name, values] of Object.entries(_uniforms)) {
      transformedUniforms[name] = {
        type: uniforms[name].type,
        values: values,
      };
    }

    _updateUniforms(transformedUniforms);
  }

  function _updateUniforms(uniforms: Record<string, UniformInfo>) {
    Object.entries(uniforms).forEach(([name, { type, values }]) => {
      const location = gl.getUniformLocation(program, name);

      if (location) {
        // @ts-ignore
        gl[`uniform${type}`].apply(gl, [location, ...values]);
      }
    });
  }

  function draw(first: number, count: number) {
    gl.useProgram(program);
    gl.drawArrays(gl[drawMode] as number, first, count);
  }

  function clear(rgba: [number, number, number, number], clearMask: number = gl.COLOR_BUFFER_BIT) {
    gl.clearColor(...rgba);
    gl.clear(clearMask);
  }

  function dispose() {
    gl.getAttachedShaders(program)?.forEach((shader) => {
      gl.detachShader(program, shader);
      gl.deleteShader(shader);
    });

    buffers.forEach(b => gl.deleteBuffer(b));

    gl.deleteProgram(program);

    gl?.getExtension('WEBGL_lose_context')?.loseContext();
    gl = undefined as any;
  }

  return { updateUniforms, draw, clear, dispose };
}

function makeShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}
