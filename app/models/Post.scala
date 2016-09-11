package models

import java.util.UUID

import com.mohiva.play.silhouette.api.{ Identity, LoginInfo ***REMOVED***
import models.daos.TemporalModel
import org.joda.time.DateTime
import play.api.libs.json._
//import reactivemongo.bson.BSONObjectID
//import reactivemongo.bson.BSONObjectID
import reactivemongo.bson.BSONObjectID

case class Post(
  _id: String,
  title: String,
  categories: List[String],
  description: String,
  content: String,
  link: List[Link],
  cover: Option[Cover],
  time: DateTime = DateTime.now()
) extends Identity with TemporalModel {
  /**
   * Tries to construct a name.
   *
   * @return Maybe a name.
   */

***REMOVED***

object Post {
  import reactivemongo.play.json.BSONFormats.BSONObjectIDFormat // This is required
  implicit val LinkFormat = Json.format[Link]
  implicit val coverFormat = Json.format[Cover]
  implicit val PostFormat = Json.format[Post]
***REMOVED***

case class Link(
  url: String,
  shortUrl: Option[String],
  filename: String,
  filesize: Long
) extends Identity with TemporalModel {

***REMOVED***

object Link {
  import reactivemongo.play.json.BSONFormats.BSONObjectIDFormat // This is required

  implicit val LinkFormat = Json.format[Link]
***REMOVED***

case class Cover(
  id: String,
  alt: String

) extends Identity with TemporalModel {

***REMOVED***

object Cover {
  import reactivemongo.play.json.BSONFormats.BSONObjectIDFormat // This is required

  implicit val coverFormat = Json.format[Cover]
***REMOVED***