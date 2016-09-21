package models.daos

import java.util.UUID

import com.mohiva.play.silhouette.api.LoginInfo
import models.{ Image, User }

import scala.concurrent.Future

/**
 * Give access to the user object.
 */
trait ImageDAO {

  def find(id: String): Future[Option[Image]]

  def save(image: Image): Future[Image]

  def getList(page: Int): Future[List[Image]]

}
