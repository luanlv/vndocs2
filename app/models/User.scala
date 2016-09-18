package models

import java.util.UUID

import com.mohiva.play.silhouette.api.util.PasswordInfo
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
case class User(
  userID: UUID,
  loginInfo: LoginInfo,
  firstName: Option[String],
  lastName: Option[String],
  fullName: Option[String],
  email: Option[String],
  password: PasswordInfo = PasswordInfo("", ""),
  avatarURL: Option[String],
  activated: Boolean,
  services: List[String] = List("master")
) extends Identity with TemporalModel {
  /**
   * Tries to construct a name.
   *
   * @return Maybe a name.
   */
  def name = fullName.orElse {
    firstName -> lastName match {
      case (Some(f), Some(l)) => Some(f + " " + l)
      case (Some(f), None) => Some(f)
      case (None, Some(l)) => Some(l)
      case _ => None
  ***REMOVED***
***REMOVED***
***REMOVED***

object User {
  import reactivemongo.play.json.BSONFormats.BSONObjectIDFormat // This is required

  implicit val passwordFormat = Json.format[PasswordInfo]
  implicit val userFormat = Json.format[User]
***REMOVED***

case class LightUser(
  userID: UUID,
  loginInfo: LoginInfo,
  fullName: Option[String],
  avatarURL: Option[String]
) extends Identity with TemporalModel {

  def trimUser(user: User) = {
    LightUser(
      user.userID,
      user.loginInfo,
      user.fullName,
      user.avatarURL
    )
***REMOVED***
***REMOVED***

object LightUser {
  import reactivemongo.play.json.BSONFormats.BSONObjectIDFormat // This is required

  implicit val lightUserFormat = Json.format[LightUser]
***REMOVED***