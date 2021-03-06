package controllers

import javax.inject.Inject

import com.mohiva.play.silhouette.api._
import com.mohiva.play.silhouette.api.exceptions.ProviderException
import com.mohiva.play.silhouette.api.repositories.AuthInfoRepository
import com.mohiva.play.silhouette.api.util.{ Credentials, PasswordHasherRegistry, PasswordInfo }
import com.mohiva.play.silhouette.impl.providers.CredentialsProvider
import forms.ChangePasswordForm
import models.services.UserService
import play.api.i18n.{ I18nSupport, Messages, MessagesApi }
import play.api.libs.concurrent.Execution.Implicits._
import play.api.mvc.Controller
import utils.silhouette.{ MyEnv, WithProvider }

import scala.concurrent.Future

class ChangePasswordController @Inject() (
  val messagesApi: MessagesApi,
  silhouette: Silhouette[MyEnv],
  userService: UserService,
  credentialsProvider: CredentialsProvider,
  authInfoRepository: AuthInfoRepository,
  passwordHasherRegistry: PasswordHasherRegistry,
  implicit val webJarAssets: WebJarAssets)
  extends Controller with I18nSupport {

  /**
   * Views the `Change Password` page.
   *
   * @return The result to display.
   */
  def view = silhouette.SecuredAction(WithProvider[MyEnv#A](CredentialsProvider.ID)) { implicit request =>
    Ok(views.html.changePassword(ChangePasswordForm.form, request.identity))
  }

  /**
   * Changes the password.
   *
   * @return The result to display.
   */
  def submit = silhouette.SecuredAction(WithProvider[MyEnv#A](CredentialsProvider.ID)).async { implicit request =>
    ChangePasswordForm.form.bindFromRequest.fold(
      form => Future.successful(BadRequest(views.html.changePassword(form, request.identity))),
      password => {
        val (currentPassword, newPassword) = password
        val credentials = Credentials(request.identity.email.getOrElse(""), currentPassword)
        credentialsProvider.authenticate(credentials).flatMap { loginInfo =>
          val passwordInfo = passwordHasherRegistry.current.hash(newPassword)
          authInfoRepository.update[PasswordInfo](loginInfo, passwordInfo).map { _ =>
            Redirect(routes.ChangePasswordController.view()).flashing("success" -> Messages("password.changed"))
          }
        }.recover {
          case e: ProviderException =>
            Redirect(routes.ChangePasswordController.view()).flashing("error" -> Messages("current.password.invalid"))
        }
      }
    )
  }
}
