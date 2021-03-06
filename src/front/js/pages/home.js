import React, { useContext } from "react";
// import { Context } from "../store/appContext";
import { Inicio } from "../component/inicio";
import { Navbar } from "../component/navbar";
import imageUrl from "../../img/bebe-meses.jpeg";
import imageUrlMeses from "../../img/bebe-pasos.jpeg";
import imagePasos from "../../img/bebe-9-meses.jpeg";
import imageDesarollo from "../../img/desarrollo-bebe.jpeg";
import imageJUegos from "../../img/juegos_didacticos.jpeg";
import imageMeses from "../../img/mom-and-baby.jpeg";
import { VideoSection } from "../component/videosection";
import { AlimentosRiesgos } from "../component/alimento-riesgos";
import "../../styles/home.css";


export const Home = () => {
  // const { store, actions } = useContext(Context);

  return (
    <>
      <Navbar />
      <div className="row mx-0">
        <div className="col px-0">
          <div className="mt-5 mx-5">
            <div className="scrollmenu-home">

              <Inicio
                titulo="Recomendaciones para el cuidado de tu bebé"
                text="Manejar a un recién nacido"
                parrafo="Si no ha pasado mucho tiempo cerca de recién nacidos, su fragilidad tal vez le resulte intimidante. Aquí se incluyen algunos aspectos básicos para tener en cuenta:
            Lavarse las manos (o usar un desinfectante para las manos) antes de tomar al bebé. Los recién nacidos todavía no tienen un sistema inmunitario fuerte, por eso tienen riesgo de contagiarse infecciones. Asegúrese de que todas las personas que toquen al bebé tengan las manos limpias.
            Sostener la cabeza y el cuello del bebé. Al acunar al bebé, alzarlo bien erguido o acostarlo, es necesario sujetarle la cabeza.
            Nunca sacuda al recién nacido, ya sea para jugar o descargar su frustración. Las sacudidas pueden provocar sangrado en el cerebro e incluso la muerte. Si necesita despertar al bebé, no lo sacuda; simplemente acaríciele los pies o las mejillas.
            Asegúrese de atar las cintas del carrito o la silla de seguridad para el automóvil cuando coloque al bebé. Limite las actividades que podrían ser muy bruscas o provocar sacudones.
            Recuerde que el recién nacido no está preparado para juegos bruscos, como mecerlo sobre las rodillas o lanzarlo al aire."
                image={imageUrl}
              />
              <Inicio
                text="Crear lazos afectivos y tranquilizar al bebé"
                parrafo="Si no ha pasado mucho tiempo cerca de recién nacidos, su fragilidad tal vez le resulte intimidante. Aquí se incluyen algunos aspectos básicos para tener en cuenta:
            Lavarse las manos (o usar un desinfectante para las manos) antes de tomar al bebé. Los recién nacidos todavía no tienen un sistema inmunitario fuerte, por eso tienen riesgo de contagiarse infecciones. Asegúrese de que todas las personas que toquen al bebé tengan las manos limpias.
            Sostener la cabeza y el cuello del bebé. Al acunar al bebé, alzarlo bien erguido o acostarlo, es necesario sujetarle la cabeza.
            Nunca sacuda al recién nacido, ya sea para jugar o descargar su frustración. Las sacudidas pueden provocar sangrado en el cerebro e incluso la muerte. Si necesita despertar al bebé, no lo sacuda; simplemente acaríciele los pies o las mejillas.
            Asegúrese de atar las cintas del carrito o la silla de seguridad para el automóvil cuando coloque al bebé. Limite las actividades que podrían ser muy bruscas o provocar sacudones.
            Recuerde que el recién nacido no está preparado para juegos bruscos, como mecerlo sobre las rodillas o lanzarlo al aire."
                image={imageUrlMeses}
              />
              <Inicio
                text="Manejar a un recién nacido"
                parrafo="La creación de lazos afectivos probablemente sea una de las partes más placenteras del cuidado de los bebés y se da en el momento de mayor sensibilidad durante las primeras horas y días posteriores al parto, cuando los padres establecen una profunda conexión con el bebé. La cercanía física puede fomentar la conexión emocional.
            Para los bebés, el apego favorece el crecimiento emocional, lo cual afecta su desarrollo en otras áreas, como el crecimiento físico. Otra forma de crear lazos afectivos es enamorarse del bebé. Los niños se desarrollan bien cuando tienen un padre u otro adulto en su vida que los ama incondicionalmente.
            Comience a crear lazos afectivos acunando a su bebé y acariciándolo suavemente. Tanto usted como su pareja pueden aprovechar la posibilidad de hacer contacto piel a piel mientras acunan o alimentan al bebé.
            Los bebés, especialmente los prematuros y los que tienen afecciones médicas, tal vez respondan a los masajes para bebés. Algunos tipos de masajes pueden mejorar la creación de lazos afectivos y ayudar al crecimiento y el desarrollo del bebé. Existen muchos libros y videos sobre masajes para bebés; pídale a su médico que le recomiende algunos.
            Sin embargo, es necesario tener cuidado porque los bebés no son tan fuertes como los adultos; por lo tanto, es importante masajearlos con suavidad.Los bebés suelen adorar los sonidos de la voz, cuando les hablan, les cantan, les balbucean o los arrullan. 
            Probablemente, a su bebé también le agrade escuchar música. Los sonajeros y los móviles musicales son otras buenas formas de estimular el oído de su bebé. Si su pequeño está molesto, intente cantarle, recitarle un poema o una canción infantil, o leerle en voz alta mientras lo acuna suavemente en una silla.
            Algunos bebés son más sensibles que otros al tacto, la luz o los sonidos y tal vez se asusten o lloren con facilidad, duerman menos de lo esperado o den vuelta la cara cuando alguien les habla o les canta. Si le ocurre esto con su bebé, reduzca el ruido y las luces a un nivel mínimo o moderado.
            Otra técnica para tranquilizar a los bebés, que resulta muy útil para algunos bebés durante las primeras semanas, es fajarlo (envolverlo con una manta de manera que le quede apretada). Todo padre primerizo debería aprender a hacerlo. Para fajar correctamente a los bebés, es necesario mantener los brazos cerca del cuerpo y permitir algún movimiento de las piernas. 
            Fajar al bebé no solo sirve para mantenerlo abrigado, sino que parece darles a los recién nacidos una sensación de seguridad y comodidad. Fajar al bebé también puede servir para reducir el reflejo de sobresalto, que puede despertar al bebé.
            Esta es la forma de fajar a un bebé:
            Extienda la manta, con una esquina levemente doblada.
            Coloque al bebé boca arriba sobre la manta con la cabeza por encima de la esquina doblada.
            Envuelva la esquina izquierda sobre el cuerpo del bebé y métala debajo de la espalda del bebé, justo por debajo del brazo derecho.
            Lleve la esquina inferior hacia arriba, sobre los pies del bebé y dóblela hacia la cabeza. Si la manta se acerca demasiado al rostro del bebé, dóblela hacia abajo. Asegúrese de no envolver con demasiada firmeza alrededor de la cadera.
            La cadera y las rodillas deben estar levemente flexionadas y hacia fuera. Si envuelve al bebé demasiado ajustado, puede incrementar las probabilidades de displasia de la cadera. Envuelva la esquina derecha alrededor del bebé y colóquela debajo de la espalda, del lado izquierdo. 
            Deje únicamente el cuello y la cabeza expuestos. Para asegurarse de que su bebé no esté arropado muy ajustado, vea si puede meter la mano entre la manta y el pecho de su bebé, lo cual le permitirá respirar sin problema. No obstante, debe asegurarse de que la manta no esté muy floja para evitar que se desarrope.
            No se debe arropar a los bebés después de los dos meses de edad. A esa edad, algunos bebés se pueden dar vuelta cuando están arropados y esto puede aumentar el riesgo del síndrome de muerte súbita del lactante."
                image={imagePasos}
              />
              <div />
              <div className="scrollmenu-home">
                <Inicio
                  titulo="Advertencias para el cuidado de tu bebé"
                  text="Seguridad de tus hijos"
                  parrafo="La seguridad de los hijos es prioritaria para todos los padres, sobre todo para los novatos que acaban de tener un bebé. Es importante saber que a medida que el bebé va creciendo, los riesgos van cambiando, así que es bueno que conozcas qué representa un riesgo para él y sobre todo cómo prevenir accidentes mediante las medidas de seguridad más adecuadas.
            El recién nacido necesita algunas atenciones particulares y medidas de seguridad fundamentales para su crecimiento y desarrollo. En este sentido, ya en el hospital vas a recibir los primeros consejos por parte de los profesionales que te atiendan.
            No dudes en preguntarles todas las dudas que tengas respecto la alimentación, el sueño del bebé o el cambio de pañales, entre otras dudas que tengas. Sin embargo, es la práctica y el día a día lo que te permitirá ganar confianza y experiencia.
            Es importante recordar que la mayor parte del tiempo el niño va a estar en tus brazos. La posición correcta para hacerlo es mantenerle la cabeza sujeta siempre, ya que el pequeño aún no tiene fuerza para mantenerla por voluntad propia. La mayor parte de su energía, el bebé la invertirá en comer, moverse y tratar de captar el mundo a su alrededor. 
            Por este mismo motivo, cuando lo tengas en brazos, evita tener otros objetos en la mano, especialmente bebidas calientes o herramientas que corten, pues a partir de los 3 meses ya empiezan a desplazar las manos de un lado a otro."
                  image={imageDesarollo}
                />
                <Inicio
                  text="Evita las posturas incómodas para tu bebé"
                  parrafo="Además, la seguridad es también necesaria en las actividades cotidianas. De este modo, debes tener especial precaución a la hora de vestirle y desvestirle y saber cómo hacerlo sin poner a tu pequeño en posturas incómodas.
            Del mismo modo, cuando le bañes, tienes que tener presente una serie de indicaciones, como no dejarlo nunca solo o utilizar una bañera expresamente diseñada para niños pequeños. Puedes completar su higiene con una pera absorbente, para su nariz y sus orejas.
            Recuerda que se desaconsjea el uso de bastoncillos de algodón.
            Durante los primeros meses de vida del pequeño, es especialmente relevante tener estas otras estas precauciones:
            Evitar todo tipo de tóxicos en el hogar.
            Evitar que el bebé se quede sin la vigilancia de un adulto.
            Nunca dejar al bebé encima de una superficie donde pueda voltearse y caerse.
            Evitar dejar objetos pequeños o cortantes a su alcance.
            Para más adelante cuando el niño empiece a gatear, usa bloqueadores de enchufes. 
            Además, considera la posibilidad de comprar vallas u obstáculos para evitar que pase a otras zonas del hogar como la cocina, escaleras si las hay, etc."
                  image={imageJUegos}
                />
                <Inicio
                  text="Evita el síndrome de la muerte súbita"
                  parrafo="¿Cómo puede evitarse el síndrome de la muerte súbita?
            El síndrome de la muerte súbita infantil suele ocurrir en los niños menores de un año de edad, y es particularmente frecuente entre los 2 y los 4 meses. Se trata de un trastorno que ocurre de manera repentina e inexplicable, y por lo tanto es muy difícil de prevenir. No obstante, pueden tomarse algunas medidas básicas para prevenirla:
            Que el bebé duerma siempre boca arriba, en un colchón firme y una cuna segura. Evita las almohadas y la ropa acolchada.
            Sacar del área donde el pequeño duerme los peluches o cualquier otro objeto blando con el que pueda asfixiarse.
            Asegurarse de que la cara del pequeño queda destapada durante el sueño.
            Alejar fuentes de calor intenso del lugar donde el niño duerme.
            No fumar ni permitir que se fume en la habitación donde duerma."
                  image={imageMeses}
                />
                <div />
              </div>
              <div className="text-center">
                <h5 className="titulo-home">ESPACIO PARA TU BEBÉ</h5>
              </div>
              <div className="card-video-group">
                <VideoSection
                  tituloVideo="Educación para tu bebé"
                  urlVideo1="https://www.youtube.com/watch?v=vNAAwojkQtM"
                  urlVideo2="https://www.youtube.com/watch?v=sOG8xJPxYqw"
                  urlVideo3="https://www.youtube.com/watch?v=UYkmRoTpCPs" />
                <VideoSection
                  tituloVideo="Entretenimiento para tu bebé"
                  urlVideo1="https://www.youtube.com/watch?v=AwpZl39gz7U"
                  urlVideo2="https://www.youtube.com/watch?v=nyrKHQxMxoo"
                  urlVideo3="https://www.youtube.com/watch?v=tlf4h1tiOOs" />
                <VideoSection
                  tituloVideo="Música para tu bebé"
                  urlVideo1="https://www.youtube.com/watch?v=lMZzkxszfWE"
                  urlVideo2="https://www.youtube.com/watch?v=azxGmHY6rFQ"
                  urlVideo3="https://www.youtube.com/watch?v=EwZ3KhAh448" />
              </div>
              <AlimentosRiesgos
                tituloC="Alimentos que puede consumir la mamá durante la etapa de lactancia y su nivel de riesgo"
                tablaA="Nivel muy bajo"
                tablaB="Muy bajo"
                tablaC="Nivel alto"
                tablaD="Nivel muy alto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
