import 'package:flutter/material.dart';
import 'package:mobile/view/categories/model/category_model.dart';

abstract class CategoryServiceBase {
  Future<CategoryModel> getCategories({
    BuildContext context,
    int skip,
    int limit,
  });
}
