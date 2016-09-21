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
  /**
   * Saves the social profile for a user.
   *
   * If a user exists for this profile then update the user, otherwise create a new user with the given profile.
   *
   * @param profile The social profile to save.
   * @return The user for whom the profile was saved.
   */

}
