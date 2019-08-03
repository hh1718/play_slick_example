package models
import play.api.libs.json._
import models.Tables._

object Helper {
  implicit val jsonUserResWrites = Json.writes[UserRes]
  implicit val jsonUserResReads = Json.reads[UserRes]
  implicit val jsonLoginReqWrites = Json.writes[LoginReq]
  implicit val jsonLoginReqReads = Json.reads[LoginReq]
  implicit val jsonLoginResWrites = Json.writes[LoginRes]
  implicit val jsonLoginResReads = Json.reads[LoginRes]
}

case class UserRes(
  res: Option[User]
)

case class LoginReq(
  id: Int,
  passWord: String,
  hash: String
)

case class LoginRes(
  message: String
)
