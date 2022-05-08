import 'package:mobile/view/account/model/account_model.dart';

class CommentsModelResponse {
  String? message;
  bool? isSuccess;
  List<CommentModel>? data;

  CommentsModelResponse({this.message, this.isSuccess, this.data});

  CommentsModelResponse.fromJson(Map<String, dynamic> json) {
    message = json['message'];
    isSuccess = json['isSuccess'];
    if (json['data'] != null) {
      data = <CommentModel>[];
      json['data'].forEach((v) {
        data!.add(new CommentModel.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['message'] = this.message;
    data['isSuccess'] = this.isSuccess;
    if (this.data != null) {
      data['data'] = this.data!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class CommentModel {
  int? id;
  int? productId;
  String? content;
  User? user;

  CommentModel({this.id, this.productId, this.content, this.user});

  CommentModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    productId = json['product_id'];
    content = json['content'];
    user = json['user'] != null ? new User.fromJson(json['user']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['product_id'] = this.productId;
    data['content'] = this.content;
    if (this.user != null) {
      data['user'] = this.user!.toJson();
    }
    return data;
  }
}
