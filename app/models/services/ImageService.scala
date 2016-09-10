package models.services

import java.util.UUID

import com.mohiva.play.silhouette.api.services.IdentityService
import com.mohiva.play.silhouette.impl.providers.CommonSocialProfile
import models.{ Image, User ***REMOVED***

import scala.concurrent.Future

/**
 * Handles actions to users.
 */
trait ImageService {

  def retrieve(id: String): Future[Option[Image]]

  def save(image: Image): Future[Image]

***REMOVED***
