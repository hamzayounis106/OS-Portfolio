function Screen() {
  return (
    <div className='w-full h-screen '>
      <div className='absolute inset-0 '>
        <img
          src='./Wallpapers/5KRESO~2_moreDetail_x2_3840x2160.png'
          alt='Background'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black opacity-5'></div>
      </div>
    </div>
  );
}

export default Screen;
