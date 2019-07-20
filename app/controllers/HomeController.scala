package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import models._
import scala.util.{ Success, Failure }
import scala.concurrent.{ExecutionContext, Future}

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(cc: ControllerComponents, dao: DaoImpl)(implicit ec: ExecutionContext)
 extends AbstractController(cc) {

  def index() = Action.async { implicit request: Request[AnyContent] =>
    dao.selectVenue().flatMap(venues => dao.selectUser().map(users => Ok(views.html.index(users, venues))))
  }

}
