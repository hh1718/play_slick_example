package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import models._
import scala.util.{ Success, Failure }
import scala.concurrent.{ExecutionContext, Future}
import play.api.libs.json.Json
import models.Helper._


@Singleton
class HomeController @Inject()(cc: ControllerComponents, dao: DaoImpl)(implicit ec: ExecutionContext)
 extends ValidateController(cc) {

  def index() = Action.async { implicit request: Request[AnyContent] =>
    dao.selectVenue().flatMap(venues => dao.selectUser().map(users => Ok(views.html.index(users, venues))))
  }
  def user() = Action.async { implicit request: Request[AnyContent] =>
    dao.selectVenue().map(venues =>  Ok(Json.toJson(venues)))
  }
  def venue() = Action.async { implicit request: Request[AnyContent] =>
    dao.selectUser().map(users => Ok(Json.toJson(users)))
  }

  def login() = Action(validateJson[LoginReq]) { implicit request =>
    val param: LoginReq = request.body
    Ok(Json.toJson(LoginRes("good")))
  }

}
