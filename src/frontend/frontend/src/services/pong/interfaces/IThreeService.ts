import { Scene, PerspectiveCamera, WebGLRenderer, Mesh } from 'three'

export default interface IThreeService {
  //#region Properties
  scene: Scene
  camera: PerspectiveCamera
  renderer: WebGLRenderer
  //#endregion
  //#region Methods
  addScene(Mesh: Mesh): void
  remove(Mesh: Mesh): void
  resize(width: number, height: number): void
  render(): void
  animate(): void
  //#endregion
}
