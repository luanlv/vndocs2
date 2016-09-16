package models.services

import models.{ Image, Link, Setup ***REMOVED***
import play.api.libs.json.JsValue

import scala.concurrent.Future
import scala.util.Try

/**
 * Handles actions to users.
 */
trait LinkService {

  def retrieve(name: String): Future[Option[models.Link]]

  def save(data: models.Link): Future[Try[models.Link]]

***REMOVED***
