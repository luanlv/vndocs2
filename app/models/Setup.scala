package models

import java.util.UUID

import com.mohiva.play.silhouette.api.{ Identity, LoginInfo ***REMOVED***
import models.daos.TemporalModel
import org.joda.time.DateTime
import play.api.libs.json._
//import reactivemongo.bson.BSONObjectID
//import reactivemongo.bson.BSONObjectID
import reactivemongo.bson.BSONObjectID

/**
 * The user object.
 *
 * @param userID The unique ID of the user.
 * @param loginInfo The linked login info.
 * @param firstName Maybe the first name of the authenticated user.
 * @param lastName Maybe the last name of the authenticated user.
 * @param fullName Maybe the full name of the authenticated user.
 * @param email Maybe the email of the authenticated provider.
 * @param avatarURL Maybe the avatar URL of the authenticated provider.
 * @param activated Indicates that the user has activated its registration.
 */
case class Setup(
  kind: String,
  value: String) extends Identity with TemporalModel {
  /**
   * Tries to construct a name.
   *
   * @return Maybe a name.
   */

***REMOVED***

object Setup {
  import reactivemongo.play.json.BSONFormats.BSONObjectIDFormat // This is required

  implicit val SetupFormat = Json.format[Setup]
***REMOVED***