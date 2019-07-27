package models
import play.api.libs.json._


case class LoginReq(
  id: Int,
  passWord: String,
  hash: String
)

case class LoginRes(
  message: String
)

object Helper {
  implicit val jsonLoginReqWrites = Json.writes[LoginReq]
  implicit val jsonLoginReqReads = Json.reads[LoginReq]
  implicit val jsonLoginResWrites = Json.writes[LoginRes]
  implicit val jsonLoginResReads = Json.reads[LoginRes]
}
