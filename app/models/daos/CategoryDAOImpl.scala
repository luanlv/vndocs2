package models.daos

import javax.inject.{ Inject, Singleton ***REMOVED***

import scala.util.Try
import java.util.UUID

import com.mohiva.play.silhouette.api.LoginInfo
import models.{ Category, User ***REMOVED***
import models.daos.UserDAOImpl._
import play.api.libs.json.{ JsObject, Json ***REMOVED***

import scala.collection.mutable
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
/**
 * Give access to the user object.
 */

@Singleton
class CategoryDAOImpl @Inject() (repository: CategoryRepository) extends CategoryDAO {

  def find(id: String) =
    repository.findOne(Json.obj("_id" -> id))

  def save(category: Category) = {
    repository.insert(category)
    Future.successful(category)
***REMOVED***

***REMOVED***

/**
 * The companion object.
 */
object CategoryDAOImpl {

***REMOVED***
