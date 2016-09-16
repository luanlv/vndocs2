package models.daos

import javax.inject.{ Inject, Singleton ***REMOVED***

import scala.util.Try
import java.util.UUID

import com.mohiva.play.silhouette.api.LoginInfo
import models.{ Image, Link, Setup, User ***REMOVED***
import models.daos.UserDAOImpl._
import play.api.libs.json.{ JsObject, JsValue, Json ***REMOVED***
import reactivemongo.bson.BSONObjectID

import scala.collection.mutable
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
/**
 * Give access to the user object.
 */

@Singleton
class LinkDAOImpl @Inject() (repository: LinkRepository) extends LinkDAO {

  def find(id: String) =
    repository.findByKind(id)

  def save(data: Link) = {
    repository.insert(data)
    //    Future.successful(data)
***REMOVED***

***REMOVED***

/**
 * The companion object.
 */
object LinkDAOImpl {

***REMOVED***
