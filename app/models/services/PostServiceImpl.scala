package models.services

import java.util.UUID
import javax.inject.Inject

import com.mohiva.play.silhouette.api.LoginInfo
import com.mohiva.play.silhouette.impl.providers.CommonSocialProfile
import models.{ Post, User ***REMOVED***
import models.daos.{ PostDAO, UserDAO ***REMOVED***
import play.api.libs.concurrent.Execution.Implicits._

import scala.concurrent.Future

class PostServiceImpl @Inject() (postDAO: PostDAO) extends PostService {

  def retrieve(id: String) = postDAO.find(id)

  def save(post: Post) = postDAO.save(post)

  /**
   * Saves the social profile for a user.
   *
   * If a user exists for this profile then update the user, otherwise create a new user with the given profile.
   *
   * @param profile The social profile to save.
   * @return The user for whom the profile was saved.
   */

***REMOVED***