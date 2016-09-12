package models.daos

import models.{ Image, Setup ***REMOVED***
import play.api.libs.json.{ JsObject, JsValue ***REMOVED***

import scala.concurrent.Future
import scala.util.Try

/**
 * Give access to the user object.
 */
trait SetupDAO {

  def find(id: String): Future[Option[Setup]]

  def save(data: Setup): Future[Try[Setup]]

***REMOVED***
