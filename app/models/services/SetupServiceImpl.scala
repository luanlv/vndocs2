package models.services

import java.util.UUID
import javax.inject.Inject

import com.mohiva.play.silhouette.api.LoginInfo
import com.mohiva.play.silhouette.impl.providers.CommonSocialProfile
import models.{ Image, Setup, User ***REMOVED***
import models.daos.{ ImageDAO, SetupDAO, UserDAO ***REMOVED***
import play.api.libs.concurrent.Execution.Implicits._
import play.api.libs.json.JsValue
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

class SetupServiceImpl @Inject() (setupDAO: SetupDAO) extends SetupService {

  def retrieve(name: String) = setupDAO.find(name)

  def save(data: Setup) = setupDAO.save(data)

***REMOVED***
