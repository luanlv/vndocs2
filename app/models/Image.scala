package models

import java.util.UUID

import com.mohiva.play.silhouette.api.{ Identity, LoginInfo }
import models.daos.TemporalModel
import org.joda.time.DateTime
import play.api.libs.json._
//import reactivemongo.bson.BSONObjectID
//import reactivemongo.bson.BSONObjectID
import reactivemongo.bson.BSONObjectID

case class Image(
  id: String,
  filename: String,
  contentType: Option[String],
  path: String,
  createAt: DateTime = DateTime.now()
) extends Identity with TemporalModel {
  /**
   * Tries to construct a name.
   *
   * @return Maybe a name.
   */

}

object Image {
  import reactivemongo.play.json.BSONFormats.BSONObjectIDFormat // This is required

  implicit val ImageFormat = Json.format[Image]
}