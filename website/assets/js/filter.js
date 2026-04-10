let filterPills = document.querySelectorAll(".filter-pill")
let products = document.querySelectorAll(".prod-card")

filterPills.forEach(function(pill) {
    pill.addEventListener("click", function(){
        
        filterPills.forEach(function(p){
            p.classList.remove("active")
        })
        filterPills.classList.add("active")

        let filter = pill.dataset.filter

        products.forEach(function(product) {
            if (filter === "todo") {
                product.style.display = "block"

            } else if (product.dataset.categoria === filter) {
                product.style.display = "block"
            
            } else {
                product.style.display = "none"
            }
        })
    })
})