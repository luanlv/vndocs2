package models.daos

import models.Link

import scala.concurrent.Future
import scala.util.Try

/**
 * Give access to the user object.
 */
trait LinkDAO {

  def find(id: String): Future[Option[Link]]

  def save(data: Link): Future[Try[Link]]

}
