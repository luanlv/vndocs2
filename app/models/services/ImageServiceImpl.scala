package models.services

import java.util.UUID
import javax.inject.Inject

import com.mohiva.play.silhouette.api.LoginInfo
import com.mohiva.play.silhouette.impl.providers.CommonSocialProfile
import models.{ Image, User }
import models.daos.{ ImageDAO, UserDAO }
import play.api.libs.concurrent.Execution.Implicits._
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

class ImageServiceImpl @Inject() (imageDAO: ImageDAO) extends ImageService {

  def retrieve(id: String) = imageDAO.find(id)

  def save(image: Image) = imageDAO.save(image)

  def getList(page: Int) = imageDAO.getList(page)

}
