import 'package:flutter/material.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/core/widgets/productItems/product_page_product.dart';
import 'package:mobile/view/product/viewmodel/product_view_model.dart';

class ProductView extends StatefulWidget {
  const ProductView({Key? key}) : super(key: key);

  @override
  State<ProductView> createState() => _ProductViewState();
}

class _ProductViewState extends State<ProductView> {
  late ProductViewModel viewModel;
  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<ProductViewModel>(),
      onModelReady: (dynamic model) async{
        model.setContext(context);
        model.init();
        viewModel = model;
      },
      onPageBuilder: (context, value){
        return Scaffold(
          appBar: _appBar(),
          body: _body(),
        );
      },
    );
  }

  AppBar _appBar(){
    return AppBar(
      leading: IconButton(
        icon: const Icon(Icons.arrow_back, color: AppColors.black),
        onPressed: () {
          debugPrint("Back button pressed");
        },
      ),
      title: const Text("Product Details"),
      actions: [
        IconButton(
            onPressed: (){
          debugPrint("Cart Button Pressed");
        },
        icon: const Icon(Icons.shopping_bag),
        )
      ],
    );
  }


  ListView _body() => ListView(
    children: [
      RoundedContainer(
          child: Column(
            children: const [
              PageProduct(),
            ],
          )
      ),
      BottomContainer(child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          addToCart(),
          buyNow(),
        ],
      )),

    ],
  );

}


class RoundedContainer extends StatelessWidget {
  const RoundedContainer({
    Key? key,
    required this.child,
}) : super(key: key);

  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(bottom: 20),
      width: double.infinity,
      decoration: const BoxDecoration(
        color: AppColors.white,
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(40),
          bottomRight: Radius.circular(40),
        )
      ),
      child: child,
    );
  }
}

class BottomContainer extends StatelessWidget {
  const BottomContainer({Key? key, required this.child}) : super(key: key);

  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Container(
        width: double.infinity,
        height: 100,
        decoration: const BoxDecoration(
          color: AppColors.primary,
        ),
        child: child,
      ),
    );
  }
}



