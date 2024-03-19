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
}

