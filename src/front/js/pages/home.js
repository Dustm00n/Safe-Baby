import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ReactPlayer from "react-player";
import "../../styles/home.css";
import imageUrl from "../../img/bebe-meses.jpeg"
import imageUrlMeses from "../../img/bebe-pasos.jpeg"
import imagePasos from "../../img/bebe-9-meses.jpeg"
import imageDesarollo from "../../img/desarrollo-bebe.jpeg"
import imageJUegos from "../../img/juegos_didacticos.jpeg"
import imageMeses from "../../img/mom-and-baby.jpeg"
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5 mx-5">
      <h5>Recomendaciones para el cuidado de tu bebé</h5>
      <div className="scrollmenu">
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Recom. Tema A</h5>
              <div className="card-body">
                <p className="parrafoA">
                  Manejar a un recién nacido
                  Si no ha pasado mucho tiempo cerca de recién nacidos, su fragilidad tal vez le resulte intimidante. Aquí se incluyen algunos aspectos básicos para tener en cuenta:

                  Lavarse las manos (o usar un desinfectante para las manos) antes de tomar al bebé. Los recién nacidos todavía no tienen un sistema inmunitario fuerte, por eso tienen riesgo de contagiarse infecciones. Asegúrese de que todas las personas que toquen al bebé tengan las manos limpias.
                  Sostener la cabeza y el cuello del bebé. Al acunar al bebé, alzarlo bien erguido o acostarlo, es necesario sujetarle la cabeza.
                  Nunca sacuda al recién nacido, ya sea para jugar o descargar su frustración. Las sacudidas pueden provocar sangrado en el cerebro e incluso la muerte. Si necesita despertar al bebé, no lo sacuda; simplemente acaríciele los pies o las mejillas.
                  Asegúrese de atar las cintas del carrito o la silla de seguridad para el automóvil cuando coloque al bebé. Limite las actividades que podrían ser muy bruscas o provocar sacudones.
                  Recuerde que el recién nacido no está preparado para juegos bruscos, como mecerlo sobre las rodillas o lanzarlo al aire.
                </p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Recom. Tema B</h5>
              <div className="card-body">
                <p className="parrafoA">Crear lazos afectivos y tranquilizar al bebé
                  La creación de lazos afectivos probablemente sea una de las partes más placenteras del cuidado de los bebés y se da en el momento de mayor sensibilidad durante las primeras horas y días posteriores al parto, cuando los padres establecen una profunda conexión con el bebé. La cercanía física puede fomentar la conexión emocional.

                  Para los bebés, el apego favorece el crecimiento emocional, lo cual afecta su desarrollo en otras áreas, como el crecimiento físico. Otra forma de crear lazos afectivos es "enamorarse" del bebé. Los niños se desarrollan bien cuando tienen un padre u otro adulto en su vida que los ama incondicionalmente.

                  Comience a crear lazos afectivos acunando a su bebé y acariciándolo suavemente. Tanto usted como su pareja pueden aprovechar la posibilidad de hacer contacto "piel a piel" mientras acunan o alimentan al bebé.

                  Los bebés, especialmente los prematuros y los que tienen afecciones médicas, tal vez respondan a los masajes para bebés. Algunos tipos de masajes pueden mejorar la creación de lazos afectivos y ayudar al crecimiento y el desarrollo del bebé. Existen muchos libros y videos sobre masajes para bebés; pídale a su médico que le recomiende algunos. Sin embargo, es necesario tener cuidado porque los bebés no son tan fuertes como los adultos; por lo tanto, es importante masajearlos con suavidad.

                  Los bebés suelen adorar los sonidos de la voz, cuando les hablan, les cantan, les balbucean o los arrullan. Probablemente, a su bebé también le agrade escuchar música. Los sonajeros y los móviles musicales son otras buenas formas de estimular el oído de su bebé. Si su pequeño está molesto, intente cantarle, recitarle un poema o una canción infantil, o leerle en voz alta mientras lo acuna suavemente en una silla.

                  Algunos bebés son más sensibles que otros al tacto, la luz o los sonidos y tal vez se asusten o lloren con facilidad, duerman menos de lo esperado o den vuelta la cara cuando alguien les habla o les canta. Si le ocurre esto con su bebé, reduzca el ruido y las luces a un nivel mínimo o moderado.

                  Otra técnica para tranquilizar a los bebés, que resulta muy útil para algunos bebés durante las primeras semanas, es fajarlo (envolverlo con una manta de manera que le quede apretada). Todo padre primerizo debería aprender a hacerlo. Para "fajar" correctamente a los bebés, es necesario mantener los brazos cerca del cuerpo y permitir algún movimiento de las piernas. Fajar al bebé no solo sirve para mantenerlo abrigado, sino que parece darles a los recién nacidos una sensación de seguridad y comodidad. Fajar al bebé también puede servir para reducir el reflejo de sobresalto, que puede despertar al bebé.

                  Esta es la forma de fajar a un bebé:

                  Extienda la manta, con una esquina levemente doblada.
                  Coloque al bebé boca arriba sobre la manta con la cabeza por encima de la esquina doblada.
                  Envuelva la esquina izquierda sobre el cuerpo del bebé y métala debajo de la espalda del bebé, justo por debajo del brazo derecho.
                  Lleve la esquina inferior hacia arriba, sobre los pies del bebé y dóblela hacia la cabeza. Si la manta se acerca demasiado al rostro del bebé, dóblela hacia abajo. Asegúrese de no envolver con demasiada firmeza alrededor de la cadera. La cadera y las rodillas deben estar levemente flexionadas y hacia fuera. Si envuelve al bebé demasiado ajustado, puede incrementar las probabilidades de displasia de la cadera.
                  Envuelva la esquina derecha alrededor del bebé y colóquela debajo de la espalda, del lado izquierdo. Deje únicamente el cuello y la cabeza expuestos. Para asegurarse de que su bebé no esté arropado muy ajustado, vea si puede meter la mano entre la manta y el pecho de su bebé, lo cual le permitirá respirar sin problema. No obstante, debe asegurarse de que la manta no esté muy floja para evitar que se desarrope.
                  No se debe arropar a los bebés después de los dos meses de edad. A esa edad, algunos bebés se pueden dar vuelta cuando están arropados y esto puede aumentar el riesgo del síndrome de muerte súbita del lactante.</p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageUrlMeses} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Recom. Tema C</h5>
              <div className="card-body">
                <p className="parrafoA">Todo acerca de los pañales
                  Probablemente, antes de volver a casa ya tenga decidido si usará pañales desechables o de tela. Sin importar cuál use, su pequeño ensuciará los pañales unas 10 veces al día, o aproximadamente 70 veces por semana.

                  Antes de cambiarle el pañal al bebé, asegúrese de tener todo lo que necesita a su alcance. De esta manera, no tendrá que dejar al bebé sin atención sobre el cambiador. Necesitará lo siguiente:

                  un pañal limpio
                  sujetadores (si usa pañales de tela)
                  ungüento para la zona del pañal
                  toallitas de bebé (o un recipiente con agua caliente y un paño o copos de algodón)
                  Después de cada movimiento de vientre o si el pañal está húmedo, coloque a su bebé boca arriba y quite el pañal sucio. Use agua, copos de algodón y un paño o toallitas para limpiar suavemente la zona genital del bebé. Al quitar el pañal de un niño, hágalo con cuidado, porque la exposición al aire puede hacer que orine. Al limpiar la zona genital de una niña, límpiela de adelante hacia atrás para evitar una infección del tracto urinario. Para prevenir o curar una erupción, aplique ungüento. Recuerde siempre lavarse las manos después de cambiar un pañal.

                  La dermatitis del pañal es una preocupación común. En general, la dermatitis es una erupción de color rojo, con bultos, y desaparece en unos pocos días con baños tibios, un poco de crema y algo de tiempo sin el pañal. La mayoría de las erupciones ocurren porque la piel del bebé es sensible y se irrita con los pañales húmedos o sucios.

                  Para prevenir o curar la dermatitis del pañal, ponga en práctica los siguientes consejos:

                  Cambie con frecuencia el pañal de su bebé y lo más pronto posible, después de que mueva el vientre.
                  Limpie suavemente la zona con agua y jabón suave (a veces, las toallitas pueden provocar una irritación). Después aplique una capa bien gruesa de crema para dermatitis del pañal. Es conveniente usar cremas con óxido de zinc porque forman una barrera contra la humedad.
                  Si usa pañales de tela, lávelos con detergente sin fragancia y sin pigmentos.
                  Deje que el bebé esté sin pañal durante un rato del día. Esto le da a la piel la oportunidad de ventilarse.
                  Si la dermatitis del pañal continúa durante más de tres días o parece estar empeorando, llame al médico. Puede deberse a una infección con un hongo que requiera un medicamento con receta.

                </p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imagePasos} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <h5>Advertencias para el cuidado de tu bebé</h5>
      <div className="scrollmenu">
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Adver. Tema A</h5>
              <div className="card-body">
                <p className="parrafoA">La seguridad de los hijos es prioritaria para todos los padres, sobre todo para los novatos que acaban de tener un bebé. Es importante saber que a medida que el bebé va creciendo, los riesgos van cambiando, así que es bueno que conozcas qué representa un riesgo para él y sobre todo cómo prevenir accidentes mediante las medidas de seguridad más adecuadas.

                  El recién nacido necesita algunas atenciones particulares y medidas de seguridad fundamentales para su crecimiento y desarrollo. En este sentido, ya en el hospital vas a recibir los primeros consejos por parte de los profesionales que te atiendan.

                  No dudes en preguntarles todas las dudas que tengas respecto la alimentación, el sueño del bebé o el cambio de pañales, entre otras dudas que tengas. Sin embargo, es la práctica y el día a día lo que te permitirá ganar confianza y experiencia.

                  Es importante recordar que la mayor parte del tiempo el niño va a estar en tus brazos. La posición correcta para hacerlo es mantenerle la cabeza sujeta siempre, ya que el pequeño aún no tiene fuerza para mantenerla por voluntad propia. La mayor parte de su energía, el bebé la invertirá en comer, moverse y tratar de captar el mundo a su alrededor. Por este mismo motivo, cuando lo tengas en brazos, evita tener otros objetos en la mano, especialmente bebidas calientes o herramientas que corten, pues a partir de los 3 meses ya empiezan a desplazar las manos de un lado a otro.</p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageDesarollo} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Adver. Tema B</h5>
              <div className="card-body">
                <p className="parrafoA">Además, la seguridad es también necesaria en las actividades cotidianas. De este modo, debes tener especial precaución a la hora de vestirle y desvestirle y saber cómo hacerlo sin poner a tu pequeño en posturas incómodas. Del mismo modo, cuando le bañes, tienes que tener presente una serie de indicaciones, como no dejarlo nunca solo o utilizar una bañera expresamente diseñada para niños pequeños. Puedes completar su higiene con una pera absorbente, para su nariz y sus orejas. Recuerda que se desaconsjea el uso de bastoncillos de algodón.

                  Durante los primeros meses de vida del pequeño, es especialmente relevante tener estas otras estas precauciones:

                  Evitar todo tipo de tóxicos en el hogar.
                  Evitar que el bebé se quede sin la vigilancia de un adulto.
                  Nunca dejar al bebé encima de una superficie donde pueda voltearse y caerse.
                  Evitar dejar objetos pequeños o cortantes a su alcance.
                  Para más adelante cuando el niño empiece a gatear, usa bloqueadores de enchufes. Además, considera la posibilidad de comprar vallas u obstáculos para evitar que pase a otras zonas del hogar como la cocina, escaleras si las hay, etc.
                </p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageJUegos} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Adver. Tema C</h5>
              <div className="card-body">
                <p className="parrafoA">¿Cómo puede evitarse el síndrome de la muerte súbita?
                  El síndrome de la muerte súbita infantil suele ocurrir en los niños menores de un año de edad, y es particularmente frecuente entre los 2 y los 4 meses. Se trata de un trastorno que ocurre de manera repentina e inexplicable, y por lo tanto es muy difícil de prevenir. No obstante, pueden tomarse algunas medidas básicas para prevenirla:
                  Que el bebé duerma siempre boca arriba, en un colchón firme y una cuna segura. Evita las almohadas y la ropa acolchada.
                  Sacar del área donde el pequeño duerme los peluches o cualquier otro objeto blando con el que pueda asfixiarse.
                  Asegurarse de que la cara del pequeño queda destapada durante el sueño.
                  Alejar fuentes de calor intenso del lugar donde el niño duerme.
                  No fumar ni permitir que se fume en la habitación donde duerma. </p>
              </div>
            </div>
            <div className="col-md-6 gap-4 d-flex justify-content-end">
              <img src={imageMeses} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h5>ESPACIO PARA TU BEBÉ</h5>
      </div>
      <div className="card">
        <h5 className="card-title">Educacion para tu bebé</h5>
        <div className="row">
          <div className="col md-4">
            <ReactPlayer
              width="360px"
              height="310px"
              controls
              url="https://www.youtube.com/watch?v=vNAAwojkQtM" />

          </div>
          <div className="col md-4">
            <ReactPlayer
              width="360px"
              height="310px"
              url="https://www.youtube.com/watch?v=sOG8xJPxYqw" />
          </div>
          <div className="col md-4">
            <ReactPlayer
              width="360px"
              height="310px"
              url="https://www.youtube.com/watch?v=UYkmRoTpCPs" />
          </div>
        </div>
      </div>
      <div className="card">
        <h5 className="card-title">Entretenimiento para tu bebé</h5>
        <div className="row">
          <div className="col md-4">
            hola
          </div>
          <div className="col md-4">
            hola
          </div>
          <div className="col md-4">
            hola
          </div>
        </div>
      </div>
      <div className="card">
        <h5 className="card-title">Música para tu bebé</h5>
        <div className="row">
          <div className="col md-4">
            hola
          </div>
          <div className="col md-4">
            hola
          </div>
          <div className="col md-4">
            hola
          </div>
        </div>
      </div>
    </div>


  );
};
