package models.daos

import javax.inject.{ Inject, Singleton ***REMOVED***

import scala.util.Try
import java.util.UUID

import com.mohiva.play.silhouette.api.LoginInfo
import models.{ Image, Setup, User ***REMOVED***
import models.daos.UserDAOImpl._
import play.api.libs.json.{ JsObject, JsValue, Json ***REMOVED***

import scala.collection.mutable
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
/**
 * Give access to the user object.
 */

@Singleton
class SetupDAOImpl @Inject() (repository: SetupRepository) extends SetupDAO {

  def find(kind: String) =
    repository.findByKind(kind)

  def save(data: Setup) = {
    repository.insert(data)
    Future.successful(data)
***REMOVED***

***REMOVED***

/**
 * The companion object.
 */
object SetupDAOImpl {

***REMOVED***
