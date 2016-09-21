package models.services

import java.util.UUID
import javax.inject.Inject

import com.mohiva.play.silhouette.api.LoginInfo
import com.mohiva.play.silhouette.impl.providers.CommonSocialProfile
import models.{ Category, Post, User }
import models.daos.{ CategoryDAO, UserDAO }
import play.api.libs.concurrent.Execution.Implicits._

import scala.concurrent.Future

class CategoryServiceImpl @Inject() (categoryDAO: CategoryDAO) extends CategoryService {

  def retrieve(id: String) = categoryDAO.find(id)

  def save(category: Category) = categoryDAO.save(category)

  def listParent = categoryDAO.listParent

}
