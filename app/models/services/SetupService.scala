package models.services

import models.{ Image, Setup ***REMOVED***
import play.api.libs.json.JsValue

import scala.concurrent.Future

/**
 * Handles actions to users.
 */
trait SetupService {

  def retrieve(kind: String): Future[Option[Setup]]

  def save(data: Setup): Future[Setup]

***REMOVED***
