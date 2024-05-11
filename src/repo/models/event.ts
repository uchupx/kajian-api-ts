import { Model } from "./model"

export class EventModel implements Model {
  public id?: string
  public speaker_id?: string
  public name?: string
  public description?: string
  public latitude?: number
  public longtide?: number
  public province_id?: number
  public city_id?: number
  public district_id?: number
  public detail_address?: string
  public date_event?: Date
  public start_event?: Date
  public end_event?: Date
  public created_at?: Date
  public updated_at?: Date
  public deleted_at?: Date

  constructor(data: any) {
    this.id = data.id ? data.id : null
    this.speaker_id = data.speaker_id ? data.speaker_id : null
    this.name = data.name ? data.name : null
    this.description = data.description ? data.description : null
    this.latitude = data.latitude ? data.latitude : null
    this.longtide = data.longtide ? data.longtide : null
    this.province_id = data.province_id ? data.province_id : null
    this.city_id = data.city_id ? data.city_id : null
    this.district_id = data.district_id ? data.district_id : null
    this.detail_address = data.detail_address ? data.detail_address : null
    this.date_event = data.date_event ? data.date_event : null
    this.start_event = data.start_event ? data.start_event : null
    this.end_event = data.end_event ? data.end_event : null
    this.created_at = data.created_at ? data.created_at : null
    this.updated_at = data.updated_at ? data.updated_at : null
    this.deleted_at = data.deleted_at ? data.deleted_at : null
  }

  // use toJSON to force the model to return only the fields that we want
  // toJSON() {
  //   return {
  //     id: this.id,
  //     speaker_id: this.speaker_id,
  //     name: this.name,
  //     description: this.description,
  //     latitude: this.latitude,
  //     longtide: this.longtide,
  //     province_id: this.province_id,
  //     city_id: this.city_id,
  //     district_id: this.district_id,
  //     detail_address: this.detail_address,
  //     date_event: this.date_event,
  //     start_event: this.start_event,
  //     end_event: this.end_event,
  //     created_at: this.created_at,
  //     updated_at: this.updated_at,
  //     deleted_at: this.deleted_at
  //   }
  // }
}

