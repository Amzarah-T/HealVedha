import { initSequelize, model } from "@/models";

export async function GET(request) {
  let result = "Failed";

  await initSequelize();

  try {
    console.log('data seeding....')

    await model.User.create({ username: "Sample", email: "sample@gmail.com", firstName: "TNS", password: "123456" });
    await model.Post.create({ title: "Welcome Post 1", image: 'https://c4.wallpaperflare.com/wallpaper/55/252/1002/kadali-nikon-d5100-sample-photo-wallpaper-preview.jpg', UserId: 1});
    await model.Post.create({ title: "Welcome Post 2", image: 'https://c4.wallpaperflare.com/wallpaper/55/252/1002/kadali-nikon-d5100-sample-photo-wallpaper-preview.jpg', UserId: 1});

    result = "Success";
  } catch (error) {
    result = error.toString()
  } finally {
    return new Response(JSON.stringify({ message: result }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}