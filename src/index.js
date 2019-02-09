document.addEventListener('DOMContentLoaded', () => {

  function imageNameAppend(giftObject){
    let imageUrl = giftObject["image"]
    let imageName = giftObject["name"]
    const giftImg = document.createElement("IMG")
    giftImg.src = imageUrl
    const giftName = document.createElement("p")
    giftName.innerText = imageName
    const liName = document.createElement("li")
    const liImg = document.createElement("li")

    const breaks = document.createElement("BR")
    breaks.innerHTML = "\n"

    const deleteButton = document.createElement("button")
    deleteButton.innerText= "Delete"
    deleteButton.addEventListener("click", function(event){
      giftList.removeChild(liName)
      giftList.removeChild(giftImg)
      giftList.removeChild(liEditDelete)
    })

    const editButton = document.createElement("button")
    editButton.innerText = "Edit"
    editButton.addEventListener('click', function(event){
      const form = document.createElement("form")
      // form.class = "ui form"
      // form.action = "index.html"
      // form.method = "POST"
      const inputName = document.createElement("input")
      const inputImage = document.createElement("input")
      inputImage.placeholder = imageUrl
      inputName.placeholder = imageName
      // inputName.type = "text"
      // inputName.name = "name"
      form.appendChild(inputName)
      form.appendChild(inputImage)
      giftList.replaceChild(form,liName)
      giftList.replaceChild(form,giftImg)
    })

    const liEditDelete = document.createElement("li")






    liName.appendChild(giftName)
    liImg.appendChild(giftImg)
    liEditDelete.appendChild(editButton)
    liEditDelete.appendChild(deleteButton)
    giftList.appendChild(liName)
    giftList.appendChild(giftImg)
    giftList.appendChild(liEditDelete)
    giftList.appendChild(breaks)
    // giftList.appendChild(liEdit)
    // giftList.appendChild(liDelete)

    searchForm.addEventListener('input',function(event){
      if (imageName.includes(event.target.value)){
        liName.hidden = false
        liImg.hidden = false

      }else{
        liName.hidden = true
        liImg.hidden = true
      }
    })

  }

  const createButton = document.querySelector("#gift-form-button")
  createButton.addEventListener("click", function(event){
    event.preventDefault()
    const giftNameInput =document.querySelector("#gift-name-input").value
    const giftImgUrl = document.querySelector("#gift-image-input").value
    const newGiftObject = {id: (gifts.length+ 1), name: `${giftNameInput}`, image: `${giftImgUrl}` }
    imageNameAppend(newGiftObject)

  })


  const searchForm =  document.querySelector("#filter-input")

  const giftList = document.querySelector(".gift-list")
  gifts.forEach(function(giftObject){
    imageNameAppend(giftObject)
  })
})
