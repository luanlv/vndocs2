package models.services

import java.util.UUID
import javax.inject.Inject

import com.mohiva.play.silhouette.api.LoginInfo
import com.mohiva.play.silhouette.impl.providers.CommonSocialProfile
import models.{ Image, Link, Setup, User ***REMOVED***
import models.daos.{ ImageDAO, LinkDAO, SetupDAO, UserDAO ***REMOVED***
import play.api.libs.concurrent.Execution.Implicits._
import play.api.libs.json.JsValue
import reactivemongo.bson.BSONObjectID

import scala.concurrent.Future

class LinkServiceImpl @Inject() (linkDAO: LinkDAO) extends LinkService {

  def retrieve(name: String) = linkDAO.find(name)

  def save(data: models.Link) = linkDAO.save(data)

***REMOVED***
