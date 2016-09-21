package models.daos

import javax.inject.{ Inject, Singleton }

import scala.util.Try
import java.util.UUID

import com.mohiva.play.silhouette.api.LoginInfo
import models.User
import models.daos.UserDAOImpl._
import play.api.libs.json.{ JsObject, Json }

import scala.collection.mutable
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
/**
 * Give access to the user object.
 */

@Singleton
class UserDAOImpl @Inject() (repository: UserRepository) extends UserDAO {

  /**
   * Finds a user by its login info.
   *
   * @param loginInfo The login info of the user to find.
   * @return The found user or None if no user for the given login info could be found.
   */
  def find(loginInfo: LoginInfo) =
    repository.findOne(Json.obj("loginInfo" -> loginInfo))

  /**
   * Finds a user by its user ID.
   *
   * @param userID The ID of the user to find.
   * @return The found user or None if no user for the given ID could be found.
   */
  def find(userID: UUID) = repository.findOne(Json.obj("userID" -> userID))

  /**
   * Saves a user.
   *
   * @param user The user to save.
   * @return The saved user.
   */
  def save(user: User) = {
    repository.insert(user)
    Future.successful(user)
  }

  def updateUser(user: User) = {
    repository.updateUser(user.userID.toString, Json.toJson(user).asOpt[JsObject].getOrElse(Json.obj()))
    Future.successful(user)
  }

  def remove(loginInfo: LoginInfo) = {
    repository.remove(Json.obj("loginInfo" -> loginInfo))
  }

}

/**
 * The companion object.
 */
object UserDAOImpl {

  /**
   * The list of users.
   */
  //  val users: mutable.HashMap[UUID, User] = mutable.HashMap()
}
