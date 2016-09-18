package models

import java.util.UUID

import com.mohiva.play.silhouette.api.{ Identity, LoginInfo ***REMOVED***
import models.daos.TemporalModel
import org.joda.time.DateTime
import play.api.libs.json._
//import reactivemongo.bson.BSONObjectID
//import reactivemongo.bson.BSONObjectID
import reactivemongo.bson.BSONObjectID

case class Comment(
  id: String,
  parentPost: String,
  comment: String,
  user: LightUser,
  time: DateTime = DateTime.now()
) extends Identity with TemporalModel {
  /**
   * Tries to construct a name.
   *
   * @return Maybe a name.
   */

***REMOVED***

object Comment {
  import reactivemongo.play.json.BSONFormats.BSONObjectIDFormat // This is required
  implicit val lightUserFormat = Json.format[LightUser]
  implicit val commentFormat = Json.format[Comment]
***REMOVED***