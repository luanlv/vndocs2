package models.services

import models.{ Image, Setup }
import play.api.libs.json.JsValue

import scala.concurrent.Future
import scala.util.Try

/**
 * Handles actions to users.
 */
trait SetupService {

  def retrieve(name: String): Future[Option[Setup]]

  def save(data: Setup): Future[Try[Setup]]

}
