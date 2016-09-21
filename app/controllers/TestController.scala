package controllers

import models._
import utils.silhouette._
import com.mohiva.play.silhouette.api.Silhouette
import play.api._
import play.api.mvc._
import play.api.Play.current
import play.api.i18n.{ Lang, Messages, MessagesApi }

import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits._
import javax.inject.{ Inject, Singleton }

import com.mohiva.play.silhouette.impl.providers.SocialProviderRegistry
import models.services.{ CategoryService, PostService, SetupService }

@Singleton
class TestController @Inject() (
  val silhouette: Silhouette[MyEnv],
  val messagesApi: MessagesApi,
  setupService: SetupService,
  categoryService: CategoryService,
  postService: PostService,
  socialProviderRegistry: SocialProviderRegistry) extends AuthController {

  def index = UserAwareAction { implicit request =>
    Ok(views.html.index())
  }

}