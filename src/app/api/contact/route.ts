import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Veri doğrulama
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: 'Tüm alanları doldurunuz' },
        { status: 400 }
      );
    }

    // E-posta formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Geçerli bir e-posta adresi giriniz' },
        { status: 400 }
      );
    }

    // Veritabanına kaydet
    let contact;
    try {
      contact = await prisma.contact.create({
        data: {
          name,
          email,
          phone,
          message,
        },
      });
    } catch (dbError) {
      console.error('Veritabanı hatası:', dbError);
      return NextResponse.json(
        { message: 'Veritabanına kayıt yapılırken bir hata oluştu' },
        { status: 500 }
      );
    }

    // E-posta gönderme ayarları
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // E-posta içeriği
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: 'Yeni İletişim Formu Mesajı',
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    };

    // E-postayı gönder
    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('E-posta gönderme hatası:', emailError);
      // E-posta gönderilemese bile form başarıyla kaydedildiği için 200 dönüyoruz
      return NextResponse.json(
        { 
          message: 'Form kaydedildi ancak e-posta gönderilemedi',
          contact 
        },
        { status: 200 }
      );
    }

    // Başarılı yanıt döndür
    return NextResponse.json(
      { message: 'Form başarıyla gönderildi', contact },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form gönderme hatası:', error);
    return NextResponse.json(
      { message: 'Form gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 