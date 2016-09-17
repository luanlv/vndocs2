package utils

import play.api.http.DefaultHttpErrorHandler
import com.mohiva.play.silhouette.api.actions.{ SecuredErrorHandler, UnsecuredErrorHandler ***REMOVED***
import play.api.i18n.{ I18nSupport, MessagesApi, Messages ***REMOVED***
import play.api._
import play.api.mvc._
import play.api.mvc.Results._
import play.api.routing.Router
import scala.concurrent.Future
import javax.inject.{ Singleton, Inject, Provider ***REMOVED***
//import controllers.routes

@Singleton
class ErrorHandler @Inject() (
  env: Environment,
  config: Configuration,
  sourceMapper: OptionalSourceMapper,
  router: Provider[Router],
  val messagesApi: MessagesApi
) extends DefaultHttpErrorHandler(env, config, sourceMapper, router) with SecuredErrorHandler with UnsecuredErrorHandler with I18nSupport {

  // 401 - Unauthorized
  override def onNotAuthenticated(implicit request: RequestHeader): Future[Result] = Future.successful {
    //    Redirect(routes.Auth.signIn)
    Ok("onNotAuthenticated")
***REMOVED***

  // 403 - Forbidden
  override def onNotAuthorized(implicit request: RequestHeader): Future[Result] = Future.successful {
    //    Forbidden(views.html.errors.accessDenied())
    Ok("onNotAuthorized")
***REMOVED***

  // 404 - page not found error
  override def onNotFound(request: RequestHeader, message: String): Future[Result] = Future.successful {
    NotFound(env.mode match {
      case Mode.Prod =>
        views.html.errors.notFound(request)(request2Messages(request))
      //        Ok("notFound")
      case _ => {
        views.html.defaultpages.devNotFound(request.method, request.uri, Some(router.get))
        //        Ok("devNotFound")
    ***REMOVED***
  ***REMOVED***)
***REMOVED***

  // 500 - internal server error
  override def onProdServerError(request: RequestHeader, exception: UsefulException) = Future.successful {
    //    InternalServerError(views.html.errors.error(request, exception)(request2Messages(request)))
    Ok("onProdServerError")
***REMOVED***
***REMOVED***