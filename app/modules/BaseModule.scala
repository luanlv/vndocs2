package modules

import com.google.inject.AbstractModule
import models.daos.{ AuthTokenDAO, AuthTokenDAOImpl ***REMOVED***
import models.services.{ AuthTokenService, AuthTokenServiceImpl ***REMOVED***
import net.codingwell.scalaguice.ScalaModule

/**
 * The base Guice module.
 */
class BaseModule extends AbstractModule with ScalaModule {

  /**
   * Configures the module.
   */
  def configure(): Unit = {
    bind[AuthTokenDAO].to[AuthTokenDAOImpl]
    bind[AuthTokenService].to[AuthTokenServiceImpl]
***REMOVED***
***REMOVED***
