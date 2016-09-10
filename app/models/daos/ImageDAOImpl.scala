package models.daos

import javax.inject.{ Inject, Singleton ***REMOVED***

import scala.util.Try
import java.util.UUID

import com.mohiva.play.silhouette.api.LoginInfo
import models.{ Image, User ***REMOVED***
import models.daos.UserDAOImpl._
import play.api.libs.json.{ JsObject, Json ***REMOVED***

import scala.collection.mutable
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
/**
 * Give access to the user object.
 */

@Singleton
class ImageDAOImpl @Inject() (repository: ImageRepository) extends ImageDAO {

  def find(id: String) =
    repository.findOne(Json.obj("_id" -> id))

  def save(image: Image) = {
    repository.insert(image)
    Future.successful(image)
***REMOVED***

***REMOVED***

/**
 * The companion object.
 */
object ImageDAOImpl {

***REMOVED***
