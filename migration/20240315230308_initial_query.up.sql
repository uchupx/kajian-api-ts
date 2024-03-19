
CREATE TABLE events(
  id char(36) not null PRIMARY KEY,
  speaker_id char(32) not null,
  name varchar(255) null,
  description text null,
  latitude float(11,8) null,
  longitude float(11,8) null,
  province_id int(11) null,
  city_id int(11) null,
  district_id int(11) null,
  detail_address text null,
  date_event datetime null,
  start_event datetime not null,
  end_event datetime null,
  created_at datetime default CURRENT_TIMESTAMP,
  updated_at datetime ON UPDATE CURRENT_TIMESTAMP,
  deleted_at datetime null
)
