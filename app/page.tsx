import Image from "next/image";

export default function Home() {
  const width15rem = {
    width: '15rem'
  };

  return (
      <>
        <section className="board">
          <h1>레시피 만들기</h1>
          <div className="inner">
            <h2>나만의 레시피를 만들어 보세요!</h2>

            <article className="menuPic">
              <h3>
                메뉴 선택
              </h3>
              <ul>
                <li>
                  <div className="card border-success mb-3" style={width15rem}>
                    <div className="card-body">
                      <h5 className="card-title">스파이시 바비큐</h5>
                      <Image src="https://sub-recipe-bucket.s3.ap-northeast-2.amazonaws.com/sandwich/spicy_bbq.png" className="card-img-top" alt="..." width={206} height={145}/>
                      <p className="card-text"><span className="text-subject">kcal : </span><span className="card-text-value">357.7</span></p>
                      <p className="card-text"><span className="text-subject">fat : </span><span className="card-text-value">7.4</span></p>
                      <p className="card-text"><span className="text-subject">protein : </span><span className="card-text-value">25.2</span></p>
                      <a href="#" className="btn btn-primary">추가</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card  border-success mb-3" style={width15rem}>
                    <div className="card-body">
                      <h5 className="card-title">스파이시 바비큐</h5>
                      <Image src="https://sub-recipe-bucket.s3.ap-northeast-2.amazonaws.com/sandwich/spicy_bbq.png" className="card-img-top" alt="..." width={206} height={145}/>
                      <p className="card-text"><span className="text-subject">kcal : </span><span className="card-text-value">357.7</span></p>
                      <p className="card-text"><span className="text-subject">fat : </span><span className="card-text-value">7.4</span></p>
                      <p className="card-text"><span className="text-subject">protein : </span><span className="card-text-value">25.2</span></p>
                      <a href="#" className="btn btn-primary">추가</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card  border-success mb-3" style={width15rem}>
                    <div className="card-body">
                      <h5 className="card-title">스파이시 바비큐</h5>
                      <Image src="https://sub-recipe-bucket.s3.ap-northeast-2.amazonaws.com/sandwich/spicy_bbq.png" className="card-img-top" alt="..." width={206} height={145}/>
                      <p className="card-text"><span className="text-subject">kcal : </span><span className="card-text-value">357.7</span></p>
                      <p className="card-text"><span className="text-subject">fat : </span><span className="card-text-value">7.4</span></p>
                      <p className="card-text"><span className="text-subject">protein : </span><span className="card-text-value">25.2</span></p>
                      <a href="#" className="btn btn-primary">추가</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card  border-success mb-3" style={width15rem}>
                    <div className="card-body">
                      <h5 className="card-title">스파이시 바비큐</h5>
                      <Image src="https://sub-recipe-bucket.s3.ap-northeast-2.amazonaws.com/sandwich/spicy_bbq.png" className="card-img-top" alt="..." width={206} height={145}/>
                      <p className="card-text"><span className="text-subject">kcal : </span><span className="card-text-value">357.7</span></p>
                      <p className="card-text"><span className="text-subject">fat : </span><span className="card-text-value">7.4</span></p>
                      <p className="card-text"><span className="text-subject">protein : </span><span className="card-text-value">25.2</span></p>
                      <a href="#" className="btn btn-primary">추가</a>
                    </div>
                  </div>
                </li>
              </ul>
            </article>
            <article className="breadPic">
              <h3>
                빵 선택
              </h3>
              <ul>
                <div className="card  border-success mb-3" style={width15rem}>
                  <div className="card-body">
                    <h5 className="card-title">허니 오트</h5>
                    <Image src="https://sub-recipe-bucket.s3.ap-northeast-2.amazonaws.com/bread/honey_oat.jpg" className="card-img-top" alt="..." width={206} height={145}/>
                    <p className="card-text"><span className="text-subject">kcal : </span><span className="card-text-value">43</span></p>
                    <p className="card-text"><span className="text-subject">fat : </span><span className="card-text-value">0.1</span></p>
                    <p className="card-text"><span className="text-subject">protein : </span><span className="card-text-value">0.4</span></p>
                    <a href="#" className="btn btn-primary">추가</a>
                  </div>
                </div>
              </ul>
            </article>
            <article className="cheesePic">
              <h3>
                치즈 선택
              </h3>
              <ul>
                <li>
                  <div className="card  border-success mb-3" style={width15rem}>
                    <div className="card-body">
                      <h5 className="card-title">아메리칸 </h5>
                      <Image src="https://sub-recipe-bucket.s3.ap-northeast-2.amazonaws.com/cheese/american.jpg" className="card-img-top" alt="..." width={206} height={145}/>
                      <p className="card-text"><span className="text-subject">kcal : </span><span className="card-text-value">35.3</span></p>
                      <a href="#" className="btn btn-primary">추가</a>
                    </div>
                  </div>
                </li>
              </ul>
            </article>
            <article className="vegePic">
              <h3>
                야채 선택
              </h3>
              <ul>
                <li>
                  <div className="card  border-success mb-3" style={width15rem}>
                    <div className="card-body">
                      <h5 className="card-title">양상추</h5>
                      <Image src="https://sub-recipe-bucket.s3.ap-northeast-2.amazonaws.com/veggie/lettuce.jpg" className="card-img-top" alt="..." width={206} height={145}/>
                      <p className="card-text"><span className="text-subject">kcal : </span><span className="card-text-value">2.9</span></p>
                      <a href="#" className="btn btn-primary">추가</a>
                    </div>
                  </div>
                </li>
              </ul>
            </article>
            <article className="saucePic">
              <h3>
                소스 선택
              </h3>
              <ul>
                <li>
                  <div className="card  border-success mb-3" style={width15rem}>
                    <div className="card-body">
                      <h5 className="card-title">랜치</h5>
                      <Image src="https://sub-recipe-bucket.s3.ap-northeast-2.amazonaws.com/sauce/ranch_sauce.jpg" className="card-img-top" alt="..." width={206} height={145}/>
                      <p className="card-text"><span className="text-subject">kcal : </span><span className="card-text-value">116</span></p>
                      <a href="#" className="btn btn-primary">추가</a>
                    </div>
                  </div>
                </li>
              </ul>
            </article>
            <div className="post">
              <h2>영양 정보 총합</h2>
              <div className="total">
                <div className="inner">
                  <ul>
                    <li><span className="total-subject">kcal : </span><span className="total-value"></span></li>
                  </ul>
                  <ul>
                    <li><span className="total-subject">fat : </span><span className="total-value"></span></li>
                  </ul>
                  <ul>
                    <li><span className="total-subject">protein : </span><span className="total-value"></span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="post">
              <h2>레시피 설명</h2>
              <form>
                <div className="inner">
                  <div className="postTitle">
                    <dl>
                      <dt>제목</dt>
                      <dd>
                        <span>
                            <input type="text" placeholder="레시피 제목을 알려주세요."/>
                        </span>
                      </dd>
                    </dl>
                  </div>
                  <div className="postDetail">
                    <dl>
                      <dt>내용</dt>
                      <dd>
                        <span>
                            <input type="text" placeholder="자세한 설명을 알려주세요."/>
                        </span>
                      </dd>
                    </dl>
                  </div>
                </div>
                <input type="submit" className="postEnd" value="완료"/>
              </form>
            </div>
          </div>
        </section>
      </>
  )
}
