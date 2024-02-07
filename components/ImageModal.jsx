import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";

const ImageModal = ({img}) => {
  return (
    <>
      <div
        class="modal fade"
        id="imageModal"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="relative modal-body  p-0"
            >
              <IoClose
                className="absolute text-[35px] text-[#7A7A7A] right-3 top-4 cursor-pointer"
                data-bs-dismiss="modal"
              />
              <Image width={500} height={900} src={img} alt="img" className=" rounded-lg w-full h-[900px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageModal;
