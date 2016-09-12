package models.daos

import models.{ Image, Setup ***REMOVED***
import play.api.libs.json.{ JsObject, JsValue ***REMOVED***

import scala.concurrent.Future

/**
 * Give access to the user object.
 */
trait SetupDAO {

  def find(kind: String): Future[Option[Setup]]

  def save(data: Setup): Future[Setup]

***REMOVED***
