import { UserOrder } from './../../models/userOrder';
import { UserOrderService } from './../../service/user-order.service';
import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { Products } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
	selector: 'app-customer-cart',
	templateUrl: './customer-cart.component.html',
	styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent implements OnInit {

	constructor(private router:Router, private activatedRoute: ActivatedRoute, private productService: ProductService, private userOrderService:UserOrderService) { }
	total: number = 0;
	items = new Array;
	trying = [Products];
	product: Products[] = [];
	result: String;
	productId: String
	totalQu: number = 0;
	currentQuantiy: number = 0;
	
	ngOnInit(): void {
		
		this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id) {
				var item: Item = {
					product: id,
					quantity: 1
				};



				//if this is null NOTHING
				if (localStorage.getItem('cart') == null) {
					let cart: Item[] =[];
					cart.push(item);
					//FirstItme cart[item,...]
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: Item[] =[];
					cart = JSON.parse(localStorage.getItem('cart'));

					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: Item = cart[i];
						console.log(cart[i].product)
						if (cart[i].product == id) {
							index = i;
							break;
						}
					 }
					if (index == -1) {
						cart.push(item);
						localStorage.setItem('cart',JSON.stringify(cart) );
					} 
					else {
						let item: Item = cart[index];
						item.quantity += 1;
		
						console.log(item.quantity)
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}

				this.loadCart();
			} else {
				 this.loadCart()
				console.log("what is up")
			}
		})
		this.displayToCart(this.items)


	}




	loadCart(): void {
	
		let cart = JSON.parse(localStorage.getItem('cart'));
		console.log(cart)
		for (var i = 0; i < cart.length; i++) {
			//let item = JSON.parse(cart[i]);
			this.items.push(cart[i]);
			console.log(this.items)
			// this.total += item.product.price * item.quantity;
			
		}
		this.items = cart;
	}

	// loadCart(): void {
	// 	this.total = 0;
	// 	this.items = [];
	// 	let cart = JSON.parse(localStorage.getItem('cart'));
	// 	for (var i = 0; i < cart.length; i++) {
	// 		let item = JSON.parse(cart[i]);
	// 		this.items.push({
	// 			product: item.product,
	// 			quantity: item.quantity
	// 		});
	// 		console.log(this.items)
	// 		// this.total += item.product.price * item.quantity;
	// 		console.log("-----------------------")
	// 		console.log(this.items[0].product)
	// 	}
	// }

	displayToCart(arry) {

		console.log(arry)
		for (let i in arry) {
			this.productService.getProductById(arry[i].product).subscribe(result => {
				this.product.push(result);
				var s: any = result;
				//console.log(s)
				this.total += this.product[i].productPrice * arry[i].quantity;
			})
			// for (let i in this.product) {
			// 	this.total += this.product[i].productPrice * arry[i].quantity;
			// }
			console.log("//////////////////")
			var s = this.product.keys
			console.log(this.product);
			console.log(s)
		}

	}

	getTotalNumber() {
		for (let i of this.items) {
			this.totalQu = this.totalQu + i.quantity
		}

	}
	remove(id: string): void {
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
	
			if (cart[i].product == id) {
				cart.splice(i)
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.product = []
		this.displayToCart(cart)
		
	}
	increaseQuantity(i, num) {
		num+1
		var temparray:Products[] = [];
		this.currentQuantiy = i + 1;
		var s =[Item]
		this.items[num].quantity = this.currentQuantiy
		var localCart = JSON.parse(localStorage.getItem("cart"));
		console.log(localCart)
		//s.push(JSON.parse(localCart)) ;
		localCart[num].quantity += 1
		console.log(localCart)
		
		//s.shift()
		// var splitted:[Item] = localCart
		// var s :Item= splitted[num]
		console.log(s)
		//console.log(s[2]["quantity"])
		// s[num]["quantity"] = this.currentQuantiy;
		this.total = 0
		for (let i in this.items) {
			this.productService.getProductById(this.items[i].product).subscribe(result => {
				temparray.push(result);
				var s: any = result;
				//console.log(s)
			
				this.total += temparray[i].productPrice * this.items[i].quantity;
			})
		// consle.log(some)
		}
		// localStorage.setItem('cart', JSON.stringify(`${s}`));
		localStorage.setItem("cart", JSON.stringify(localCart))
		// this.loadCart();
	}
	decreaseQuantity(i, num) {
		num+1
		var temparray:Products[] = [];
		this.currentQuantiy = i - 1;
		var s =[Item]
		this.items[num].quantity = this.currentQuantiy
		var localCart = JSON.parse(localStorage.getItem("cart"));
		localCart[num].quantity -= 1
		this.total = 0
		for (let i in this.items) {
			this.productService.getProductById(this.items[i].product).subscribe(result => {
				temparray.push(result);
				var s: any = result;
				//console.log(s)
			
				this.total += temparray[i].productPrice * this.items[i].quantity;
			})
		// consle.log(some)
		}
	
		localStorage.setItem("cart", JSON.stringify(localCart))
	
	}
	checkOut(){
		 var getuserId = JSON.parse(localStorage.getItem("auth_meta"));
		
		var userString:string = getuserId.userId
		let userOrderCheckOut= new UserOrder
		console.log(userString)
		userOrderCheckOut.userId = userString

		userOrderCheckOut.cartInProducts=this.items
		userOrderCheckOut.totlePrice = this.total
		this.userOrderService.addUserOrder(userOrderCheckOut).subscribe(result =>this.result = result)
	}


}
