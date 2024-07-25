CREATE TABLE speakers(
  id char(36) NOT NULL PRIMARY KEY,
  user_id char(36) NULL,
  name varchar(255) NOT NULL,
  description text  NULL,
  photo varchar(255) NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NULL  UPDATE CURRENT_TIMESTAMP,
  deleted_at timestamp NULL,
)
