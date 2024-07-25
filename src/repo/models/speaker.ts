import { Model } from "./model"

export class SpeakerModel implements Model {
  public id?: number
  public name?: string
  public description?: string
  public photo?: string
  public user_id?: number
  public created_at?: Date
  public updated_at?: Date
  public deleted_at?: Date

  constructor(data: any) {
    this.id = data.id ? data.id : null
    this.name = data.name ? data.name : null
    this.description = data.description ? data.description : null
    this.photo = data.photo ? data.photo : null
    this.user_id = data.user_id ? data.user_id : null
    this.created_at = data.created_at ? data.created_at : null
    this.updated_at = data.updated_at ? data.updated_at : null
    this.deleted_at = data.deleted_at ? data.deleted_at : null
  }

  // use toJSON to force the model to return only the fields that we want
  // toJSON() {
  //   return {
  //     id: this.id,
  //     name: this.name,
  //     description: this.description,
  //     photo: this.photo,
  //     created_at: this.created_at,
  //     updated_at: this.updated_at,
  //     deleted_at: this.deleted_at
  //   }
  // }


}
